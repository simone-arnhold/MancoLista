$(document).ready(function () {
  const addBtn = document.getElementById("add")
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

  $(".input50").each(function () {
    $(this).focus(function () {
      $(this).removeClass("alert-validate")
    })
  })

  addBtn.addEventListener("click", () => addNewMagSet())

  function addNewMagSet() {
    var magSetName = $("#mag-name")
      .val()
      .replace(/[^a-zA-Z0-9_-\s]/gi, "")
      .replaceAll(" ", "_")

    const magAmount = $("#mag-amount").val()

    var correctValues = true

    // || /^[a-zA-Z0-9]+$/.test($("#mag-name"))
    // hack to check if element exists with length
    if (!magSetName || $("#" + magSetName).length) {
      setAlertValidate($("#mag-name"))
      correctValues = false
    }
    if (!magAmount || magAmount == 0 || magAmount > 9999) {
      setAlertValidate($("#mag-amount"))
      correctValues = false
    }

    if (correctValues == false) {
      //if does not pass validation, exit
      return
    }

    $("body").append(
      $(`
    <div class="mag-block" id="${magSetName}">
      <div class="tools">
        <h4 class="mag-title">${magSetName.replaceAll("_", " ")}</h2>
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
      </div>
      <div class="mag-container" id="${magSetName}--mag-container"></div>
    </div>`)
    )

    //List mag-title button logic
    const currentMagBlock = document.getElementById(`${magSetName}`)
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
      const newID = magSetName + " " + i

      // $("#" + magSetName).append(
      //   $(`<span class="circled-fill" id="${newID}">${i}</span>`).on(
      //     "click",
      //     function () {
      //       $(this).toggleClass("clicked")
      //     }
      //   )
      // )

      $("#" + magSetName + "--mag-container").append(
        $(`<span class="circled-fill" id="${newID}">${i}</span>`)
          .on("mouseover", setClicked)
          .on("click", setClickedFirstClick)
      )
    }
  }
})
