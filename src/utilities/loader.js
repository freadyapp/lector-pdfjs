import anime from 'animejs'
import { _e } from 'pragmajs'

//util.addStyles(`
//.fragment-loader-element {
//width: 1rem;
//height: 1rem;
//border: 1px solid #FFF;
//background-color: #FFF;      
//} 
//`)

export function loader(element) {
    return createNewLoader(element)
}

export function createNewLoader(size=4, element=".") {
    // todo convert this to pragma

    const staggerVisualizerEl = _e(element).addClass('pragma-loader')

    // const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
    const fragment = document.createDocumentFragment();
    const grid = [size, size];
    const col = grid[0];
    const row = grid[1];
    const numberOfElements = col * row;

    for (let i = 0; i < numberOfElements; i++) {
        fragment.appendChild(document.createElement('div'));
    }

    staggerVisualizerEl.appendChild(fragment);

    const staggersAnimation = anime.timeline({
        targets: staggerVisualizerEl.querySelectorAll('div'),
        easing: 'easeInOutSine',
        delay: anime.stagger(50),
        loop: true,
        autoplay: false
    })
        .add({
            translateX: [
                { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'x' }) },
                { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'x' }) }
            ],
            translateY: [
                { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'y' }) },
                { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'y' }) }
            ],
            duration: 1000,
            scale: .5,
            delay: anime.stagger(100, { grid: grid, from: 'center' })
        })

        .add({
            translateX: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'x' }),
            translateY: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'y' }),
            rotate: 0,
            scaleX: 2.5,
            scaleY: .25,
            delay: anime.stagger(4, { from: 'center' })
        })
        .add({
            rotate: anime.stagger([90, 0], { grid: grid, from: 'center' }),
            delay: anime.stagger(50, { grid: grid, from: 'center' })
        })
        .add({
            translateX: 0,
            translateY: 0,
            scale: .5,
            scaleX: 1,
            rotate: 180,
            duration: 1000,
            delay: anime.stagger(100, { grid: grid, from: 'center' })
        })
        .add({
            scaleY: 1,
            scale: 1,
            delay: anime.stagger(20, { grid: grid, from: 'center' })
        })

    staggersAnimation.play();
    return staggerVisualizerEl
}

