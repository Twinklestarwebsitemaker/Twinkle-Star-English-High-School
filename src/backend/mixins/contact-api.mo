import List "mo:core/List";
import Time "mo:core/Time";
import ContactTypes "../types/contact";
import CommonTypes "../types/common";
import ContactLib "../lib/contact";

mixin (submissions : List.List<ContactTypes.ContactSubmission>) {
  var nextContactId : Nat = 0;

  public shared func addContactSubmission(
    name : Text,
    email : Text,
    subject : Text,
    message : Text,
    inquiryType : Text,
  ) : async CommonTypes.Result<Nat, Text> {
    if (name == "") { return #err("Name is required") };
    if (email == "") { return #err("Email is required") };
    if (message == "") { return #err("Message is required") };
    let id = nextContactId;
    let timestamp = Time.now();
    let _ = ContactLib.addSubmission(submissions, id, name, email, subject, message, inquiryType, timestamp);
    nextContactId += 1;
    #ok(id)
  };
};
