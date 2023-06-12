const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const onMenuClick = (e) => {
        let target = e.target;
        const markType = target.classList.contains('all') ? markAll : wrapper.querySelectorAll(`.${target.className}`);

        if (target && target.tagName === 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            typeFilter(markType);
        }
    };

    menu.addEventListener('click', onMenuClick);
};

export default filter;
