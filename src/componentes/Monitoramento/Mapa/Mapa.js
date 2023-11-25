import './Mapa.css' 

const Mapa = (props) => { 
    let latitude = props.latitude 
    let longitude = props.longitude 
    let link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6635703294245!2d" + longitude + "!3d" + latitude + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580b5f95a1a6b%3A0x8cbf4aa77b9b33f6!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1553024824859" 
    
    return( <div> <iframe width="600" height="200" frameborder="0" src={link} allowfullscreen ></iframe> </div> ); 

} 

export default Mapa