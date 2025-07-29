const coding = ['javascript', 'java', 'python', 'ruby', 'SQL', 'R', 'PHP']
console.log("--------------call back function---------------")

coding.forEach(function(val) {
    console.log(val);
});

///////////////////
console.log("--------------arro function---------------")

coding.forEach((item) => {
    console.log(item)
})

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const MyCodding = [{
        languagename: "JavaScript",
        languagefilename: "js"
    },
    {
        languagename: "Python",
        languagefilename: "py"
    },
    {
        languagename: "Ruby",
        languagefilename: "rb"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "PHP",
        languagefilename: "php"
    }
]

MyCodding.forEach((elements) => {
    console.log(`language file name ${elements.languagefilename} And language name ${elements.languagename}`);
})