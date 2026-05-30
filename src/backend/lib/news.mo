import List "mo:core/List";
import NewsTypes "../types/news";

module {
  public type NewsItem = NewsTypes.NewsItem;

  public func getAll(news : List.List<NewsItem>) : [NewsItem] {
    let arr = news.toArray();
    arr.reverse()
  };

  public func add(news : List.List<NewsItem>, id : Nat, title : Text, date : Int, category : Text, content : Text, imageUrl : Text, excerpt : Text) : NewsItem {
    let item : NewsItem = { id; title; date; category; content; imageUrl; excerpt };
    news.add(item);
    item
  };

  public func seedSampleData(news : List.List<NewsItem>, startId : Nat) : Nat {
    let samples : [(Text, Int, Text, Text, Text, Text)] = [
      (
        "Welcome Back! New School Year Begins",
        1725148800000000000,
        "Announcements",
        "We are thrilled to welcome all students, staff, and families back for another exciting school year. This year promises to be filled with new opportunities, growth, and achievement. Please review the updated school handbook available on our website.",
        "https://placehold.co/800x400/4F46E5/FFFFFF?text=New+School+Year",
        "A warm welcome to the new school year — filled with opportunities, growth, and achievement."
      ),
      (
        "Annual Science Fair Winners Announced",
        1726012800000000000,
        "Announcements",
        "Congratulations to all participants in this year's Annual Science Fair! First place went to Emily Carter for her groundbreaking project on renewable energy storage. Second place was awarded to Marcus Thompson for his research on urban biodiversity. We are proud of every student who participated.",
        "https://placehold.co/800x400/059669/FFFFFF?text=Science+Fair",
        "Emily Carter and Marcus Thompson take top honors at this year's Annual Science Fair."
      ),
      (
        "Fall Sports Season Kicks Off",
        1726876800000000000,
        "Sports",
        "The fall sports season is officially underway! Our football, soccer, volleyball, and cross-country teams have begun their practice schedules. Come out and support your fellow students at our home games. Check the athletics calendar for dates and locations.",
        "https://placehold.co/800x400/DC2626/FFFFFF?text=Fall+Sports",
        "Football, soccer, volleyball, and cross-country teams are ready for an exciting fall season."
      ),
      (
        "Drama Club Presents: Romeo and Juliet",
        1727740800000000000,
        "Events",
        "The school Drama Club is proud to announce their fall production of Shakespeare's Romeo and Juliet. Performances will be held on October 25–27 in the Main Auditorium. Tickets are available at the front office or online through our school website. Don't miss this spectacular show!",
        "https://placehold.co/800x400/7C3AED/FFFFFF?text=Drama+Club",
        "Catch the Drama Club's fall production of Romeo and Juliet on October 25–27."
      ),
      (
        "Robotics Club Qualifies for State Championship",
        1728604800000000000,
        "Clubs",
        "Our Robotics Club has qualified for the State Championship after an outstanding performance at the regional tournament. The team, led by Captain Priya Sharma, built an autonomous robot capable of navigating complex obstacle courses. The state competition will be held in December.",
        "https://placehold.co/800x400/0891B2/FFFFFF?text=Robotics+Club",
        "The Robotics Club earns a spot at the State Championship with their innovative autonomous robot."
      ),
      (
        "Homecoming Dance: Save the Date!",
        1729468800000000000,
        "Events",
        "Mark your calendars — Homecoming 2024 is scheduled for November 9th in the school gymnasium. This year's theme is 'Under the Stars.' Tickets will go on sale starting November 1st. Dress code is semi-formal. Come celebrate school spirit and make lasting memories!",
        "https://placehold.co/800x400/DB2777/FFFFFF?text=Homecoming+Dance",
        "Homecoming 2024 — 'Under the Stars' — is set for November 9th. Get your tickets early!"
      ),
      (
        "Basketball Team Wins Regional Tournament",
        1730332800000000000,
        "Sports",
        "The varsity basketball team brought home the regional championship trophy after a thrilling 68–62 victory over Riverside High School. Coach Davis praised the team's dedication and teamwork throughout the season. The team now advances to the state semifinals.",
        "https://placehold.co/800x400/EA580C/FFFFFF?text=Basketball+Win",
        "Varsity basketball claims the regional title with a 68–62 win over Riverside High."
      ),
      (
        "Art Show: Student Masterpieces on Display",
        1731196800000000000,
        "Events",
        "The annual student art show will open on November 20th in the school's main hallway gallery. Over 80 works of art including paintings, sculptures, photography, and digital art will be on display. The gallery is open to the public from 9 AM to 4 PM on school days through December 1st.",
        "https://placehold.co/800x400/CA8A04/FFFFFF?text=Art+Show",
        "Over 80 student artworks on display at the annual art show opening November 20th."
      ),
    ];

    var id = startId;
    for ((title, date, category, content, imageUrl, excerpt) in samples.values()) {
      let item : NewsItem = { id; title; date; category; content; imageUrl; excerpt };
      news.add(item);
      id += 1;
    };
    id
  };
};
