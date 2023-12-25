
        let fontControl = document.getElementById("fontControl");
        let resizableText = document.getElementById("resizableText");
        function range() {
            let Size = fontControl.value;
            resizableText.style.fontSize = `${Size}px`;
        }
    