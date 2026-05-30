module {
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    inquiryType : Text;
    timestamp : Int;
  };
};
