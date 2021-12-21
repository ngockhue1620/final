import './App.css';
import React from 'react'
import BlogItem from './components/BlogItem'
function App() {
  const [listBlog, setListBlog] = React.useState(    
    [
      {
        
        title: "Title1",
        body: "Body1",
        author: "author1",
        id: 1
      },
    
      {
        
        title: "Title2",
        body: "Body2",
        author: "author2",
        id: 2
      },{
        
        title: "Title3",
        body: "Body3",
        author: "author3",
        id: 3
      },{
        
        title: "Title4",
        body: "Body4",
        author: "author4",
        id: 4
      }
    ])
  const [title,setTitle] = React.useState('')
  const [author,setAuthor] = React.useState('')
  const [body,setBody] = React.useState('')
  const updateBlog = (value) =>{
    const index = listBlog.findIndex(item => item.id === value.id)
    const temp = [...listBlog]
    temp[index].title = value.title
    temp[index].body = value.body
    temp[index].author = value.author
    setListBlog(temp)

    
  }
  const deleteBlog = (id) => {
    const index = listBlog.findIndex(item => item.id === id)
    const temp = [...listBlog]
    temp.splice(index, 1)
    setListBlog(temp)
  }
  const handleBody = (e) => {
    setBody(e.target.value)
  }
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const onSave = () => {
    const d = new Date()
    const value = {
      title: title,
      body: body,
      author: author,
      id: String(d)
    }
    const temp =[...listBlog]
    temp.push(value)
    setListBlog(temp)
  }
  return (
    <div class="container">
      <button class="btn tn-primary d-flex justify-content-end"  data-toggle="modal" data-target="#exampleModalAdd">Thêm Mới</button>
      <div class="view">
        { listBlog.map((item, index) => <BlogItem blog={item} key={index} updateBlog={updateBlog} deleteBlog={deleteBlog} /> )}      
      </div>
      <div class="modal fade" id="exampleModalAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update Blog</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
            <div class="form-group">
              <label for="exampleInputEmail1">Article Title</label>
              <input type="text" class="form-control" placeholder="Article Title" value={title} onChange={(e) =>handleTitle(e)} />
             
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Article Body</label>
              <input type="text" class="form-control" placeholder="Article Body" value={body} onChange={(e) => handleBody(e)}/>
             
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Article Author</label>
              <input type="text" class="form-control" placeholder="Article Author" value={author} onChange={(e) =>handleAuthor(e)}/>
             
            </div>
            <button class="btn btn-primary" onClick={() =>onSave()}>Save</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
