const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
  
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active-style')) {
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0px';
            } else {
                btns.forEach(otherBtn => {
                    if (otherBtn.classList.contains('active-style')) {
                    otherBtn.classList.remove('active-style');
                    otherBtn.nextElementSibling.classList.remove('active-content');
                    otherBtn.nextElementSibling.style.maxHeight = '0px';
                    }
                });
    
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            }
        });
    });

  





        //   blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;