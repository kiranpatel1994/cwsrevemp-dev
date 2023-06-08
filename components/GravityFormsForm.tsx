import { useMutation, gql } from "@apollo/client";

import { GravityFormsForm as GravityFormsFormType, FormField, FieldError } from "../generated/graphql";
import useGravityForm from "../hooks/useGravityForm";
import GravityFormsField from "./GravityFormsField";

interface Props {
  form: GravityFormsFormType;
}

export default function GravityFormsForm({ form }: Props) {
  const formID = form.formId;
  const { state } = useGravityForm();
  const object = state;
  const json = JSON.stringify(object);
  const unquoted = json.replace(/"([^"]+)":/g, '$1:');
  const SUBMIT_FORM = gql`
  mutation MyMutation {
    submitGfForm(
      input: {id: ${formID}, fieldValues: ${unquoted}}) {
        entry {
          id
        }
        errors {
          id
          message
        }
      }
  }`;
  
  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM);
  const haveEntryId = Boolean(data?.submitGfForm?.entry?.id);
  const haveFieldErrors = Boolean(data?.submitGfForm?.errors?.length);
  const wasSuccessfullySubmitted = haveEntryId && !haveFieldErrors;
  const defaultConfirmation = form.confirmations?.find(confirmation => confirmation?.isDefault);
  const formFields = form.formFields?.nodes || [];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    submitForm({
      variables: {
        id: form.formId,
        fieldValues: state,
      }
    }).catch(error => {
      console.error(error);
    })
  }

  function getFieldErrors(id: number): FieldError[] {
    if (!haveFieldErrors) return [];
    return data.submitGfForm.errors.filter((error: FieldError) => error.id === id);
  }

  if (wasSuccessfullySubmitted) {
    return <p>{defaultConfirmation?.message || 'Form successfully submitted - thank you.'}</p>
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      {formFields.map(field =>
        <GravityFormsField
          key={field?.id}
          field={field as FormField}
          fieldErrors={getFieldErrors(Number(field?.id))}
        />
      )}
      {error ? (
        <p className="error-message">{error.message}</p>
      ) : null}
      <button type="submit" disabled={loading}>
        {form?.button?.text || 'Submit'}
      </button>
    </form>
  );
}
