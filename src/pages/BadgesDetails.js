import React from "react";
import BadgeHeader from "../components/BadgeHeader";
import header from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Modal from "../components/Modal";

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <BadgeHeader imgHeader={header}></BadgeHeader>

      <div className="my-2 justify-content-center d-flex">
        <h1>{`${badge.firstName} ${badge.lastName}`}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col-6">
            <h2>Actions:</h2>
            <div className="d-flex align-items-center">
              <div className="">
                <div>
                  <Link
                    className="btn btn-primary mb-5 mt-5"
                    to={`/badges/${badge.id}/edit`}
                  >
                    {" "}
                    Edit{" "}
                  </Link>
                </div>
                <div>
                  <button
                    onClick={props.onOpenModal}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <Modal isOpen={props.modal} onClose={props.onCloseModal}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia in autem aliquam delectus. Error id voluptates
                    beatae iure fuga quisquam commodi quas, illo voluptatem!
                    Labore ut nam fugiat aut quo?
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5"></div>
      </div>
    </div>
  );
}

export default BadgeDetails;
