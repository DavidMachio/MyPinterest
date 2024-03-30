import './Footer.css'


const footer = document.querySelector('#footer')

export const printFooter = () => {

    const text = document.createElement('p')
    text.textContent = 'By David Machio'
    footer.append(text)
}