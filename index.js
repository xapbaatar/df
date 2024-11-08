const content = [
    [
      "Төрийн мэдээллийн нэгдсэн сүлжээнд холбогдсон болон онц чухал мэдээллийн дэд бүтэцтэй төрийн өмчит хуулийн этгээдийн мэдээллийн систем, мэдээллийн сүлжээний аюулгүй байдлыг хангах зориулалт бүхий техник, программ хангамжийг шалган баталгаажуулах, дүгнэлт гаргах;",
      "Төрийн мэдээллийн нэгдсэн сүлжээнд холбогдсон болон онц чухал мэдээллийн дэд бүтэцтэй төрийн өмчит хуулийн этгээдэд гадаад улсын зээл, тусламж, хөрөнгө оруулалтаар хэрэгжих мэдээллийн технологийн төсөл, хөтөлбөрт кибер аюулгүй байдлыг хангах асуудлаар дүгнэлт гаргаж, холбогдох байгууллагад санал, шаардлага хүргүүлэх;"
       ],
    [
      "Тагнуулын байгууллагад хуулиар харьяалуулсан эрүүгийн болон зөрчлийн хэрэг мөн иргэн, захиргаа, арбитрын хэрэг, маргаан дээр цахим технологийн шинжилгээ хийж, дүгнэлт гаргах"
       ],
    [
      "Кибер халдлага зөрчилтэй тэмцэх Үндэсний төвийн кибер халдлага, зөрчил, хортой кодын шинжилгээ хийх үйл ажиллагаанд дэмжлэг үзүүлэх"
    ],
    [
      "Зохиогч Б.Чинзоригт"
    ],
    [
      "Гала хамтлагын гишүүн Галбадрах"
    ]
  ];
  
  const btnWhyReact = document.getElementById("btn-why-react");
  const btnCoreFeature = document.getElementById("btn-core-features");
  const btnResources = document.getElementById("btn-resources");
  const btnAbout = document.getElementById("btn-about");
  const btnGala = document.getElementById("btn-gala");
  const tabContent = document.getElementById("tab-content");
  
  function displayContent(items) {
    let listContent = "";
    for (const item of items) {
      listContent += `<li>${item}</li>`;
    }
    const list = document.createElement("ul");
    tabContent.innerHTML = ""; // clear existing content
    list.innerHTML = listContent; // insert new content
    tabContent.append(list);
  }
  
  function highlightButton(btn) {
    // Clear all existing styling / highlights
    btnWhyReact.className = "";
    btnCoreFeature.className = "";
    btnResources.className = "";
    btnAbout.className = "";
    btnGala.className = "";
    btn.className = "active"; // set new style / highlight
  }
  
  function handleClick(event) {
    const btnId = event.target.id;
    highlightButton(event.target);
    if (btnId === "btn-why-react") {
      displayContent(content[0]);
    } else if (btnId === "btn-core-features") {
      displayContent(content[1]);
    } else {
      displayContent(content[2]);
    }  
    if (btnId === "btn-about") {
      displayContent(content[3]);
    }   
    if (btnId === "btn-gala") {
      displayContent(content[4]);
    }     
  }
  
  displayContent(content[0]); // initially show this content
  
  btnWhyReact.addEventListener("click", handleClick);
  btnCoreFeature.addEventListener("click", handleClick);
  btnResources.addEventListener("click", handleClick);
  btnAbout.addEventListener("click", handleClick);
  btnGala.addEventListener("click", handleClick);
  