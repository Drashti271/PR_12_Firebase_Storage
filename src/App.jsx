import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from './firestore'

const App = () => {
  const [book , setBook] = useState({});
  const [list , setList] = useState([]);

  const handleChange = (e) => {
    const { name , value } = e.target;
    setBook({...book, [name] : value});
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if(book.id) {
        await updateData(book);
      } else {
        await addDoc(collection(db, 'books'),book);
      }
      getAllData();
    } catch (error) {
      console.log(error.message);
    }
    
    setBook({});
  }

  const getAllData = async() => {
    try {
      const querySnapshot = await getDocs(collection(db,'books'));
      const newList = []
      querySnapshot.forEach((doc) => {
        newList.push({id : doc.id , ...doc.data()});
      })
      setList(newList);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleDelete = async(id) => {
    try {
      await deleteDoc(doc(db , 'books', id));
      getAllData();
    } catch (error) {
      console.log(error.message);
    }
  }

  const updateData = async(id) => {
    try {
      const { id } = book;
      delete book.id;
      await updateDoc(doc(db, 'books', id), book);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleEdit = (id) => {
    const book = list.find((val) => val.id == id);
    setBook(book);
  }

  useEffect(() => {
    getAllData();
  },[]);

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-4'>
            <form action="" method="post" onSubmit={handleSubmit}>
              <h2 className='text-center mb-3'>Add Book Details</h2>
              <div className='mb-3'>
                <label htmlFor="bookName" className='form-label'>Book Name</label>
                <input type="text" className='form-control' onChange={handleChange} value={book.bookName || ""} name='bookName' id='bookName' />
              </div>
              <div className='mb-3'>
                <label htmlFor="authorName" className='form-label'>Author Name</label>
                <input type="text" className='form-control' onChange={handleChange} value={book.authorName || ""} name='authorName' id='authorName' />
              </div>
              <div className='mb-3'>
                <label htmlFor="price" className='form-label'>Price</label>
                <input type="number" className='form-control' onChange={handleChange} value={book.price || ""} name='price' id='price' />
              </div>
              <div className='text-center mb-3'>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-6'>
            <table className='table table-hover table-striped table-bordered caption-top'>
              <caption>
                <h2>Book Details</h2>
              </caption>
              <thead className='table-dark'>
                <tr>
                  <th>Sr. No</th>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((value,index) => {
                    return (
                      <tr key={value.id}>
                        <td>{index + 1}</td>
                        <td>{value.bookName}</td>
                        <td>{value.authorName}</td>
                        <td>{value.price}</td>
                        <td>
                          <button type='button' className='btn btn-danger me-2' onClick={() => handleDelete(value.id)}>Delete</button>
                          <button type='button' className='btn btn-warning' onClick={() => handleEdit(value.id)}>Edit</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
