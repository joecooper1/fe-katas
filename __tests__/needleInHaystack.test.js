const { needleInHaystack } = require("../needleInHaystack");

const haystack = {
  name: "Northcoders",
  description: "Awesome coding bootcamp",
  staff: {
    tutors: "James and Chris",
    support: "Louise"
  },
  contactDetails: {
    web: "https://northcoders.com",
    phone: "",
    address: {
      office: "Northcoders, Gold 67, The Sharp Project, Manchester",
      postcode: "M40 5BJ"
    }
  },
  reviews: {
    april: {
      chris: "I love Northcoders",
      james: "It is awesome!"
    },
    may: {
      louise: "Northcoders is a fantastic coding bootcamp"
    }
  }
};

describe("needleInHaystack()", () => {
  it("returns an empty array when the word does not appear", () => {
    const needle = "Sausages";
    expect(needleInHaystack(haystack, needle)).toEqual([]);
  });
  it("returns array of location of the needle", () => {
    const needle = "M40";
    expect(needleInHaystack(haystack, needle)).toEqual([
      "contactDetails.address.postcode"
    ]);
  });
  it("returns array of location of the needle", () => {
    const needle = "coding";
    expect(needleInHaystack(haystack, needle)).toEqual([
      "description",
      "reviews.may.louise"
    ]);
  });
  it("is not case sensitive", () => {
    const needle = "northCodeRs";
    expect(needleInHaystack(haystack, needle)).toEqual([
      "contactDetails.address.office",
      "contactDetails.web",
      "name",
      "reviews.april.chris",
      "reviews.may.louise"
    ]);
  });
});
