const openSegmentBtn = document.getElementById('openModalSegmentBtn');
const closeSegmentBtn = document.getElementById('closeModalSegmentBtn');
const modalSegment = document.getElementById('modalSegment');
const addSegmentBtn = document.getElementById('addSegmentBtn')


const openBtn1 = document.getElementById('openModalBtn1');
const closeBtn1 = document.getElementById('closeModalBtn1');
const modal1 = document.getElementById('modal1');
const submitBtn1 = document.getElementById('closeSubmitBtn1')

const openBtn2 = document.getElementById('openModalBtn2');
const closeBtn2 = document.getElementById('closeModalBtn2');
const modal2 = document.getElementById('modal2');
const submitBtn2 = document.getElementById('closeSubmitBtn2')

const openBtn3 = document.getElementById('openModalBtn3');
const closeBtn3 = document.getElementById('closeModalBtn3');
const modal3 = document.getElementById('modal3');
const submitBtn3 = document.getElementById('closeSubmitBtn3')


const openBtn4 = document.getElementById('openModalBtn4');
const closeBtn4 = document.getElementById('closeModalBtn4');
const modal4 = document.getElementById('modal4');
const submitBtn4 = document.getElementById('closeSubmitBtn4')




openSegmentBtn.addEventListener('click', () => {
    modalSegment.classList.add('open');
});

closeSegmentBtn.addEventListener('click', () => {
    modalSegment.classList.remove('open');
});


addSegmentBtn.addEventListener('click', () => {
    modalSegment.classList.remove('open');
});


openBtn1.addEventListener('click', () => {
    modal1.classList.add('open');
});

closeBtn1.addEventListener('click', () => {
    modal1.classList.remove('open');
});


submitBtn1.addEventListener('click', () => {
    modal1.classList.remove('open');
});

openBtn2.addEventListener('click', () => {
    modal2.classList.add('open');
});

closeBtn2.addEventListener('click', () => {
    modal2.classList.remove('open');
});


submitBtn2.addEventListener('click', () => {
    modal2.classList.remove('open');
});

openBtn3.addEventListener('click', () => {
    modal3.classList.add('open');
});

closeBtn3.addEventListener('click', () => {
    modal3.classList.remove('open');
});


submitBtn3.addEventListener('click', () => {
    modal3.classList.remove('open');
});

openBtn4.addEventListener('click', () => {
    modal4.classList.add('open');
});

closeBtn4.addEventListener('click', () => {
    modal4.classList.remove('open');
});


submitBtn4.addEventListener('click', () => {
    modal4.classList.remove('open');
});