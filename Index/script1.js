var imgCount = 0;
var title;
var desc;
var imgContent = [
 ["imgOption1", "BOM", "Lorem ipsum dolor sit amet."],
 ["imgOption2", "DOM", "Nullam fringilla imperdiet eleifend"],
 ["imgOption3", "JavaScript", "Cras dapibus ipsum a consequat tincidunt"]
];
function previewImg1(imgSrc){
 document.getElementById("imgViewer").src = imgSrc.src;
 imgContent[imgCount][0] = imgSrc.id;
 document.getElementById("topicTtl").innerHTML ="BOM";
 document.getElementById("topicDescrpt").innerHTML ="Lorem ipsum dolor sit amet.";
}
function previewImg2(imgSrc){
 document.getElementById("imgViewer").src = imgSrc.src;
 imgContent[imgCount][0] = imgSrc.id;
 document.getElementById("topicTtl").innerHTML ="DOM";
 document.getElementById("topicDescrpt").innerHTML ="Nullam fringilla imperdiet eleifend";
}
function previewImg3(imgSrc){
 document.getElementById("imgViewer").src = imgSrc.src;
 imgContent[imgCount][0] = imgSrc.id;
 document.getElementById("topicTtl").innerHTML ="JavaScript";
 document.getElementById("topicDescrpt").innerHTML ="Cras dapibus ipsum a consequat tincidund";
}
