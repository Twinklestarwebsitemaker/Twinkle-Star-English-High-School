import List "mo:core/List";
import ContactTypes "../types/contact";
import CommonTypes "../types/common";

module {
  public type ContactSubmission = ContactTypes.ContactSubmission;
  public type Result<T, E> = CommonTypes.Result<T, E>;

  public func addSubmission(
    submissions : List.List<ContactSubmission>,
    id : Nat,
    name : Text,
    email : Text,
    subject : Text,
    message : Text,
    inquiryType : Text,
    timestamp : Int,
  ) : ContactSubmission {
    let submission : ContactSubmission = { id; name; email; subject; message; inquiryType; timestamp };
    submissions.add(submission);
    submission
  };

  public func getAll(submissions : List.List<ContactSubmission>) : [ContactSubmission] {
    submissions.toArray()
  };
};
