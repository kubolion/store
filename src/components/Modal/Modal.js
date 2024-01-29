import React from 'react';

const Modal = ({handleOnShowModal}) => {

    const handleClickSend = (e) =>{
      e.preventDefault()
        console.log(e)
        const bodyReq = {
            title: e.target.title.value ,
            price:  e.target.price.value,
            description:  e.target.description.value,
            image:  e.target.image.value,
            category:  e.target.category.value
        }
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                bodyReq
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    return (
        <div className="bg-black/80 fixed top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center">

            <form onSubmit={handleClickSend} className="flex flex-col gap-[15px] w-[420px] bg-white border  rounded-3xl p-5">

                <input placeholder="title" name="title" type="text"/>
                <input placeholder="price" name="price" type="text"/>
                <input placeholder="category" name="category" type="text"/>
                <input placeholder="image" name="image" type="text"/>
                <textarea placeholder=" description" name="description" cols="30" rows="10"></textarea>
                <div className="flex flex-row justify-around">

                    <button type="submit">send</button>
                    <button onClick={handleOnShowModal}>cancel</button>

                </div>

            </form>
        </div>

    );
};

export default Modal;