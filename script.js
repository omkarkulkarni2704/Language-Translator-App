const languages = [
    {
      no: "0",
      name: "Auto",
      native: "Detect",
      code: "auto",
    },
    {
      no: "",
      name: "Afrikaans",
      native: "Afrikaans",
      code: "af",
    },
    {
      no: "",
      name: "Albanian",
      native: "Shqip",
      code: "sq",
    },
    {
      no: "",
      name: "Arabic",
      native: "عربي",
      code: "ar",
    },
    {
      no: "",
      name: "Armenian",
      native: "Հայերէն",
      code: "hy",
    },
    {
      no: "",
      name: "Azerbaijani",
      native: "آذربایجان دیلی",
      code: "az",
    },
    {
      no: "",
      name: "Basque",
      native: "Euskara",
      code: "eu",
    },
    {
      no: "",
      name: "Belarusian",
      native: "Беларуская",
      code: "be",
    },
    {
      no: "",
      name: "Bengali",
      native: "বাংলা",
      code: "bn",

    },
    {
      no: "",
      name: "Bulgarian",
      native: "Български",
      code: "bg",
    },
    {
      no: "",
      name: "Catalan",
      native: "Català",
      code: "ca",
    },
    {
      no: "",
      name: "Chinese (Simplified)",
      native: "中文简体",
      code: "zh-CN",
    },
    {
      no: "",
      name: "Chinese (Traditional)",
      native: "中文繁體",
      code: "zh-TW",
    },
    {
      no: "",
      name: "Croatian",
      native: "Hrvatski",
      code: "hr",
    },
    {
      no: "",
      name: "Czech",
      native: "Čeština",
      code: "cs",
    },
    {
      no: "",
      name: "Danish",
      native: "Dansk",
      code: "da",
    },
    {
      no: "",
      name: "Dutch",
      native: "Nederlands",
      code: "nl",
    },
    {
      no: "",
      name: "English",
      native: "English",
      code: "en",
    },
    {
      no: "",
      name: "Estonian",
      native: "Eesti keel",
      code: "et",
    },
    {
      no: "",
      name: "Filipino",
      native: "Filipino",
      code: "tl",
    },
    {
      no: "",
      name: "Finnish",
      native: "Suomi",
      code: "fi",
    },
    {
      no: "",
      name: "French",
      native: "Français",
      code: "fr",
    },
    {
      no: "",
      name: "Galician",
      native: "Galego",
      code: "gl",
    },
    {
      no: "",
      name: "Georgian",
      native: "ქართული",
      code: "ka",
    },
    {
      no: "",
      name: "German",
      native: "Deutsch",
      code: "de",
    },
    {
      no: "",
      name: "Greek",
      native: "Ελληνικά",
      code: "el",
    },
    {
      no: "",
      name: "Gujarati",
      native: "ગુજરાતી",
      code: "gj",
    },
    {
      no: "",
      name: "Haitian Creole",
      native: "Kreyòl ayisyen",
      code: "ht",
    },
    {
      no: "",
      name: "Hebrew",
      native: "עברית",
      code: "iw",
    },
    {
      no: "",
      name: "Hindi",
      native: "हिन्दी",
      code: "hi",
    },
    {
      no: "",
      name: "Hungarian",
      native: "Magyar",
      code: "hu",
    },
    {
      no: "",
      name: "Icelandic",
      native: "Íslenska",
      code: "is",
    },
    {
      no: "",
      name: "Indonesian",
      native: "Bahasa Indonesia",
      code: "id",
    },
    {
      no: "",
      name: "Irish",
      native: "Gaeilge",
      code: "ga",
    },
    {
      no: "",
      name: "Italian",
      native: "Italiano",
      code: "it",
    },
    {
      no: "",
      name: "Japanese",
      native: "日本語",
      code: "ja",
    },
    {
      no: "",
      name: "Korean",
      native: "한국어",
      code: "ko",
    },
    {
      no: "",
      name: "Kannada",
      native: "ಕನ್ನಡ",
      code: "ka",
    },
    {
      no: "",
      name: "Konkani",
      native: "कोंकणी",
      code: "kn",
    },
    {
      no: "",
      name: "Latvian",
      native: "Latviešu",
      code: "lv",
    },
    {
      no: "",
      name: "Lithuanian",
      native: "Lietuvių kalba",
      code: "lt",
    },
    {
      no: "",
      name: "Macedonian",
      native: "Македонски",
      code: "mk",
    },
    {
      no: "",
      name: "Malay",
      native: "Malay",
      code: "ms",
    },
    {
      no: "",
      name: "Maltese",
      native: "Malti",
      code: "mt",
    },
    {
      no: "",
      name: "Marathi",
      native: "मराठी",
      code: "mr",
    },
    {
      no: "",
      name: "Malayalam",
      native: "മലയാളം",
      code: "ma",

    },
    {
      no: "",
      name: "Norwegian",
      native: "Norsk",
      code: "no",
    },
    {
      no: "",
      name: "Odia",
      native: "ଓଡିଆ",
      code: "od"

    },
    {
      no: "",
      name: "Persian",
      native: "فارسی",
      code: "fa",
    },
    {
      no: "",
      name: "Polish",
      native: "Polski",
      code: "pl",
    },
    {
      no: "",
      name: "Portuguese",
      native: "Português",
      code: "pt",
    },
    {
      no: "",
      name: "Romanian",
      native: "Română",
      code: "ro",
    },
    {
      no: "",
      name: "Russian",
      native: "Русский",
      code: "ru",
    },
    {
      no: "",
      name: "Sanskrit",
      native: "संस्कृत",
      code: "sk",
    },
    {
      no: "",
      name: "Serbian",
      native: "Српски",
      code: "sr",
    },
    {
      no: "",
      name: "Slovak",
      native: "Slovenčina",
      code: "sk",
    },
    {
      no: "",
      name: "Slovenian",
      native: "Slovensko",
      code: "sl",
    },
    {
      no: "",
      name: "Spanish",
      native: "Español",
      code: "es",
    },
    {
      no: "",
      name: "Swahili",
      native: "Kiswahili",
      code: "sw",
    },
    {
      no: "",
      name: "Swedish",
      native: "Svenska",
      code: "sv",
    },
    {
      no: "",
      name: "Tamil",
      native: "தமிழ்",
      code: "tm",
    },
    {
      no: "",
      name: "Thai",
      native: "ไทย",
      code: "th",
    },
    {
      no: "",
      name: "Turkish",
      native: "Türkçe",
      code: "tr",
    },
    {
      no: "",
      name: "Ukrainian",
      native: "Українська",
      code: "uk",
    },
    {
      no: "",
      name: "Urdu",
      native: "اردو",
      code: "ur",
    },
    {
      no: "",
      name: "Vietnamese",
      native: "Tiếng Việt",
      code: "vi",
    },
    {
      no: "",
      name: "Welsh",
      native: "Cymraeg",
      code: "cy",
    },
    {
      no: "",
      name: "Yiddish",
      native: "ייִדיש",
      code: "yi",
    },
  ];

  const dropdowns = document.querySelectorAll(".dropdown-container"),
  inputLanguageDropdown = document.querySelector("#input-language"),
  outputLanguageDropdown = document.querySelector("#output-language");

function populateDropdown(dropdown, options) {
  dropdown.querySelector("ul").innerHTML = "";
  options.forEach((option) => {
    const li = document.createElement("li");
    const title = option.name + " (" + option.native + ")";
    li.innerHTML = title;
    li.dataset.value = option.code;
    li.classList.add("option");
    dropdown.querySelector("ul").appendChild(li);
  });
}

populateDropdown(inputLanguageDropdown, languages);
populateDropdown(outputLanguageDropdown, languages);

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    dropdown.classList.toggle("active");
  });

  dropdown.querySelectorAll(".option").forEach((item) => {
    item.addEventListener("click", (e) => {
      //remove active class from current dropdowns
      dropdown.querySelectorAll(".option").forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      const selected = dropdown.querySelector(".selected");
      selected.innerHTML = item.innerHTML;
      selected.dataset.value = item.dataset.value;
      translate();
    });
  });
});
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});

const swapBtn = document.querySelector(".swap-position"),
  inputLanguage = inputLanguageDropdown.querySelector(".selected"),
  outputLanguage = outputLanguageDropdown.querySelector(".selected"),
  inputTextElem = document.querySelector("#input-text"),
  outputTextElem = document.querySelector("#output-text");

swapBtn.addEventListener("click", (e) => {
  const temp = inputLanguage.innerHTML;
  inputLanguage.innerHTML = outputLanguage.innerHTML;
  outputLanguage.innerHTML = temp;

  const tempValue = inputLanguage.dataset.value;
  inputLanguage.dataset.value = outputLanguage.dataset.value;
  outputLanguage.dataset.value = tempValue;

  //swap text
  const tempInputText = inputTextElem.value;
  inputTextElem.value = outputTextElem.value;
  outputTextElem.value = tempInputText;

  translate();
});

function translate() {
  const inputText = inputTextElem.value;
  const inputLanguage =
    inputLanguageDropdown.querySelector(".selected").dataset.value;
  const outputLanguage =
    outputLanguageDropdown.querySelector(".selected").dataset.value;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
    inputText
  )}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      outputTextElem.value = json[0].map((item) => item[0]).join("");
    })
    .catch((error) => {
      console.log(error);
    });
}
inputTextElem.addEventListener("input", (e) => {
  //limit input to 5000 characters
  if (inputTextElem.value.length > 5000) {
    inputTextElem.value = inputTextElem.value.slice(0, 5000);
  }
  translate();
});

const uploadDocument = document.querySelector("#upload-document"),
  uploadTitle = document.querySelector("#upload-title");

uploadDocument.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (
    file.type === "application/pdf" ||
    file.type === "text/plain" ||
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    uploadTitle.innerHTML = file.name;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      inputTextElem.value = e.target.result;
      translate();
    };
  } else {
    alert("Please upload a valid file");
  }
});

const downloadBtn = document.querySelector("#download-btn");

downloadBtn.addEventListener("click", (e) => {
  const outputText = outputTextElem.value;
  const outputLanguage =
    outputLanguageDropdown.querySelector(".selected").dataset.value;
  if (outputText) {
    const blob = new Blob([outputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = `translated-to-${outputLanguage}.txt`;
    a.href = url;
    a.click();
  }
});

const darkModeCheckbox = document.getElementById("dark-mode-btn");

darkModeCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const inputChars = document.querySelector("#input-chars");

inputTextElem.addEventListener("input", (e) => {
  inputChars.innerHTML = inputTextElem.value.length;
});

