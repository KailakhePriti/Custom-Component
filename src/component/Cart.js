import React,{useState} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import '../css/Cart.css'
export default function Cart(props) {
    return (
    <div>
        <div className="box">
            <div className="main_box">
                        <Card className="cart_box">
                            <CardBody>
                                    <div >
                                        <i className="fab fa-react" style={{fontSize: '50px'}}>
                                           
                                        </i>
                                        <CardTitle tag="h5">{props.cartname}</CardTitle>
                                        <CardText style={{textAlign: 'justify'}}>{props.carttext}</CardText>                        
                                        <Button style={{backgroundColor: 'black ',color: 'white',border: 'none',marginTop: '20px'}}>{props.read}</Button>
                                    </div>
                            </CardBody>
                        </Card>
            </div>
            <div className="block2">
                <a href={props.link}>{props.clickHere}</a>
                <img src={props.imgsrc} alt="" className='img_block'/>
            </div>
        </div>
    </div>
    )
}
