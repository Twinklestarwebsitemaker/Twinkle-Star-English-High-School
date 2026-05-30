import List "mo:core/List";
import NewsTypes "../types/news";
import NewsLib "../lib/news";

mixin (news : List.List<NewsTypes.NewsItem>) {
  var nextNewsId : Nat = NewsLib.seedSampleData(news, 0);

  public query func getNews() : async [NewsTypes.NewsItem] {
    NewsLib.getAll(news)
  };
};
