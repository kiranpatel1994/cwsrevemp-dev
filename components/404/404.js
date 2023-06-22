import Link from "next/link";

export default function Custom404() {
  return (
    <main
      className="position-relative page-404 zindex-2 overflow-hidden"
      id="main"
    >
      <div className="container-xl nw4_container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>404 - Page Not Found!</h1>
            <p>
              Oops! That page can’t be found.
              <Link href="/">To the Home! </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
