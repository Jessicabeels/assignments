var user = {
    name: "Grant Schroeder",
    title: "Dr.",
    institution: "University of California, Los Angeles",
    location: "Los Angeles, CA",
    field: "Orthopaedic surgery",
    numOfPublications: 1000000000,
    premiumUser: true,
    favoriteResearchTopics: [],
    researchFriends: [{
            name: "Jessica",
            title: "Girl Boss",
            institution: "NASA",
            location: "Los Angeles, CA",
            field: "tech policy",
            numOfPublications: 2000000000,
            premiumUser: true,
            favoriteResearchTopics: [{
                    computing: ["Machine learning", "Artifical Intelligence", "Javascript", "UX research"]
                },
                {
                    socialImpact: ["Sustainabilty", "Income Unequality", "Mental Health services", "Prison Reform"]
                },
            ],
            researchFriends: [{
                    name: "Courtney",
                    title: "JD/Girl Boss",
                    institution: "GW School of Law",
                    location: "Washington, D.C.",
                    field: "law",
                    numOfPublications: 10000000,
                    premiumUser: true,
                    favoriteResearchTopics: [{
                            OneL: ["Torts", "Property", "Napping"]
                        },
                        {
                            TwoL: ["Napping", "Senate Judicary Committee", "more Torts", "I need 50 lines of code so even more torts", "Space Law"]
                        },

                    ],
                    addFriend: function () {
                        console.log("Friend Request Sent")
                    }
                }


            ],
            addFriend: function () {
                console.log("Friend Request Sent")
            }



        }

    ],
    addFriend: function () {
        console.log("Friend Request Sent")
    }
}

user.addFriend();