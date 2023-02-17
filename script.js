$(document).ready(function () {
  const addBtn = document.getElementById("add-btn")
  var isDown = false

  $(document)
    .mousedown(function () {
      isDown = true
    })
    .mouseup(function () {
      isDown = false
    })

  function setClicked() {
    if (isDown) {
      $(this).toggleClass("clicked")
    }
  }

  function setClickedFirstClick() {
    // workaround because the first click does not work with onmouseover()
    $(this).toggleClass("clicked")
  }

  function setAlertValidate(input) {
    $(input).addClass("alert-validate")
  }

  $(".input50").each(() => {
    $(this).focus(() => {
      $(this).removeClass("alert-validate")
    })
  })

  function evalMagName(magName) {}

  function evalMagAmount(magAmount) {}

  const magName = $("#mag-name")
    .val()
    .replace(/[^a-zA-Z0-9_-\s]/gi, "")
    .replaceAll(" ", "_")
  const magAmount = $("#mag-amount").val()

  // addBtn.addEventListener("click", () => addNewMagSet(evalMagName, evalMagAmount))
  addBtn.addEventListener("click", () => addNewMagSet(magName, magAmount))
  // addBtn.addEventListener("click", () => addNewMagSet())

  // function addNewMagSet() {
  //   var magName = $("#mag-name")
  //     .val()
  //     .replace(/[^a-zA-Z0-9_-\s]/gi, "")
  //     .replaceAll(" ", "_")

  //   const magAmount = $("#mag-amount").val()

  //   var correctValues = true

  //   //check if element exists using length
  //   if (!magName || $("#" + magName).length) {
  //     setAlertValidate($("#mag-name"))
  //     correctValues = false
  //   }
  //   if (!magAmount || magAmount == 0 || magAmount > 999) {
  //     setAlertValidate($("#mag-amount"))
  //     correctValues = false
  //   }

  //   if (correctValues == false) {
  //     //if does not pass validation, exit
  //     return
  //   }

  //   $("body").append(
  //     $(`
  //   <div class="mag-block" id="${magName}">
  //     <div class="tools">
  //       <h4 class="mag-title">${magName.replaceAll("_", " ")}</h2>
  //       <button class="edit"><i class="fas fa-edit"></i></button>
  //       <button class="delete"><i class="fas fa-trash"></i></button>
  //     </div>
  //     <div class="mag-container" id="${magName}--mag-container"></div>
  //   </div>`)
  //   )

  //   //List mag-title button logic
  //   const currentMagBlock = document.getElementById(`${magName}`)
  //   const editBtn = currentMagBlock.querySelector(".edit")
  //   const delBtn = currentMagBlock.querySelector(".delete")

  //   editBtn.addEventListener("click", () => {
  //     // todo edit logic
  //     // pass
  //   })

  //   delBtn.addEventListener("click", () => {
  //     currentMagBlock.remove()
  //   })

  //   for (let i = 1; i <= magAmount; i++) {
  //     const newID = magName + " " + i

  //     $("#" + magName + "--mag-container").append(
  //       $(`<span class="circled-fill" id="${newID}">${i}</span>`)
  //         .on("mouseover", setClicked)
  //         .on("click", setClickedFirstClick)
  //     )
  //   }
  // }

  function addNewMagSet(magName, magAmount) {
    var magName = $("#mag-name")
      .val()
      .replace(/[^a-zA-Z0-9_-\s]/gi, "")
      .replaceAll(" ", "_")

    const magAmount = $("#mag-amount").val()

    var correctValues = true

    //check if element exists using length
    if (!magName || $("#" + magName).length) {
      setAlertValidate($("#mag-name"))
      correctValues = false
    }
    if (!magAmount || magAmount == 0 || magAmount > 999) {
      setAlertValidate($("#mag-amount"))
      correctValues = false
    }

    if (correctValues == false) {
      //if does not pass validation, exit
      return
    }

    $("body").append(
      $(`
    <div class="mag-block" id="${magName}">
      <div class="tools">
        <h4 class="mag-title">${magName.replaceAll("_", " ")}</h2>
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
      </div>
      <div class="mag-container" id="${magName}--mag-container"></div>
    </div>`)
    )

    //List mag-title button logic
    const currentMagBlock = document.getElementById(`${magName}`)
    const editBtn = currentMagBlock.querySelector(".edit")
    const delBtn = currentMagBlock.querySelector(".delete")

    editBtn.addEventListener("click", () => {
      // todo edit logic
      // pass
    })

    delBtn.addEventListener("click", () => {
      currentMagBlock.remove()
    })

    for (let i = 1; i <= magAmount; i++) {
      const newID = magName + " " + i

      $("#" + magName + "--mag-container").append(
        $(`<span class="circled-fill" id="${newID}">${i}</span>`)
          .on("mouseover", setClicked)
          .on("click", setClickedFirstClick)
      )
    }
  }

  // Submit list logic
  const mancolistaSubmitBtn = document.querySelector(".mancolista-submit")
  // const textArea = $("#mancolista-area")
  const textArea = document.getElementById("mancolista-area")

  const tempDiv = document.querySelector(".temp-textcontent")

  textArea.addEventListener("keyup", (e) => {
    let content = e.target.value.trim()
    tempDiv.innerHTML = content

    // if (e.key == "Enter") {
    //   createList("Diabolik", [1, 2, 4, 5, 11])
    // }
  })
  //parse input
  //lines that start with letters are titles
  //lines that start with numbers are lists
  //use higher number as roof for mag amount

  // createList("Diabolik", [1, 2, 4, 5, 11])
  function createList(magName, values, magAmount) {
    //take the max value to determine highest mag if not declared
    if (magAmount === undefined) {
      const magAmount = Math.max(values)
    }
  }
})
