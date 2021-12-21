import React from 'react';

function BlogItem(props){
  const [title,setTitle] = React.useState(props.blog.title)
  const [author,setAuthor] = React.useState(props.blog.author)
  const [body,setBody] = React.useState(props.blog.body)
  const handleBody = (e) => {
    setBody(e.target.value)
  }
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const onEdit = () => {
    const value = {
      title: title,
      body: body,
      author: author,
      id: props.blog.id
    }
    console.log("chay")
    props.updateBlog(value)
  }
  const onDelete = () =>{
    props.deleteBlog(props.blog.id)
  }
  return (
    <div class="card col-sm blogItem">
      <div class="card-header">
        {props.blog.title}
      </div>
      <div class="card-body">
        {/* <h5 class="card-title">Special title treatment</h5> */}
        <p class="card-text">{props.blog.body}</p>
        <button class="btn btn-primary"  data-toggle="modal" data-target={`#exampleModal${props.blog.id}`}>Edit</button> 
        <button class='btn btn-danger deleteButton' onClick={() => onDelete()} >Delete</button>
      </div>
      <div class="modal fade" id={`exampleModal${props.blog.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <button class="btn btn-primary"  data-dismiss="modal" onClick={() =>onEdit()}>Save</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogItem