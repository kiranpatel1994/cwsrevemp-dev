import { gql } from "@apollo/client";

import { HtmlField as HtmlFieldType, FieldError } from "../../generated/graphql";

export const HTML_FIELD_FIELDS = gql`
  fragment HtmlFieldFields on HtmlField {
    id
    content
  }
`;

interface Props {
  field: HtmlFieldType;
  fieldErrors: FieldError[];
}

const DEFAULT_VALUE = '';

export default function HtmlField({ field, fieldErrors }: Props) {
  console.log("here",field);
  const { id, content } = field;
  return (
    <div className={`gfield gfield-${id}`.trim()} dangerouslySetInnerHTML={{__html: content}}/>
  );
}
