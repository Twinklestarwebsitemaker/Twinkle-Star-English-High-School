import List "mo:core/List";
import NewsTypes "types/news";
import ContactTypes "types/contact";
import NewsApi "mixins/news-api";
import ContactApi "mixins/contact-api";

actor {
  let news = List.empty<NewsTypes.NewsItem>();
  let submissions = List.empty<ContactTypes.ContactSubmission>();

  include NewsApi(news);
  include ContactApi(submissions);
};
