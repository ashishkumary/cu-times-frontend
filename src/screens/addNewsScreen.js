import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNews } from '../actions/newsAction'
//import { Editor, EditorState } from "draft-js";
//import "draft-js/dist/Draft.css";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { NEWS_ADD_RESET } from '../constants/newsConstant';

export default function AddNewsScreen(props) {

    const [heading, setHeading] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [errorUpload, setErrorUpload] = useState('')

    const newsAdd = useSelector((state) => state.newsAdd)
    const { success, loading, error } = newsAdd
    console.log('newsAdd', newsAdd)

    const dispatch = useDispatch()

    useEffect(() => {
        if (success) {
            props.history.push('/newslist')
            dispatch({ type: NEWS_ADD_RESET })
        }
    }, [success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addNews({ heading, author, description, category, image }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData()
        bodyFormData.append('image', file)
        setLoadingUpload(true)
        try {
            const { data } = await axios.post('https://cu-times.herokuapp.com/api/uploads/s3', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setImage(data)
            setLoadingUpload(false)
        } catch (error) {
            setErrorUpload(error.message)
            setLoadingUpload(false)
        }
    }

    return (
        <>
            {
                error ? <p>{error}</p>
                    :
                    loading ? 'Loading...'
                        :
                        <div className='add-news-container'>
                            <div className='screen-heading'><h2>Add News</h2></div>
                            <form onSubmit={submitHandler}>
                                <div className='input-block'>
                                    <label htmlFor='heading'>Heading</label>
                                    <input id='heading' type='text' value={heading} onChange={(e) => setHeading(e.target.value)}></input>
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='image'>Image</label>
                                    <input type='text' value={image} onChange={(e) => setImage(e.target.value)}></input>
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='image-file'>Image File</label>
                                    <input id='image-file' type='file' label='Choose Image' onChange={uploadFileHandler}></input>
                                    {loadingUpload && <p>Loading...</p>}
                                    {errorUpload && <p>{errorUpload}</p>}
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='author'>Author</label>
                                    <input id='author' type='text' value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor='description'>Description</label>
                                    <CKEditor
                                        htmlFor='description'
                                        editor={ClassicEditor}
                                        data={description}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data)
                                        }}
                                        config={{
                                            toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'insertTable',
                                                'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo']
                                        }}
                                    />
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='category'>Category</label>
                                    <select id='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value=''>Select</option>
                                        <option value='academics'>Academics</option>
                                        <option value='sports'>Sports</option>
                                        <option value='culture'>Culture</option>
                                        <option value='events'>Events</option>
                                    </select>
                                </div>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
            }
        </>
    )
}


// export default function MyEditor() {
//     const [editorState, setEditorState] = React.useState(() =>
//         EditorState.createEmpty()
//     );

//     const editor = React.useRef(null);
//     function focusEditor() {
//         editor.current.focus();
//     }

//     return (
//         <div
//             style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
//         // onClick={focusEditor}
//         >
//             <Editor
//                 ref={editor}
//                 editorState={editorState}
//                 onChange={setEditorState}
//                 placeholder="Write something!"
//                 toolbar={{
//                     inline: { inDropdown: true },
//                     list: { inDropdown: true },
//                     textAlign: { inDropdown: true },
//                     link: { inDropdown: true },
//                     history: { inDropdown: true },
//                     //image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
//                 }}
//             />
//         </div>
//     );
// }

// class EditorContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             editorState: EditorState.createEmpty(),
//         };
//     }

//     onEditorStateChange = (editorState) => {
//         // console.log(editorState)
//         this.setState({
//             editorState,
//         });
//     };

//     render() {
//         const { editorState } = this.state;
//         return <div className='editor'>
//             <Editor
//                 editorState={editorState}
//                 onEditorStateChange={this.onEditorStateChange}
//                 toolbar={{
//                     inline: { inDropdown: true },
//                     list: { inDropdown: true },
//                     textAlign: { inDropdown: true },
//                     link: { inDropdown: true },
//                     history: { inDropdown: true },
//                     // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
//                 }}
//             />
//         </div>
//     }
// }

// export default EditorContainer





//worked
// class EditorContainer extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             description: "",
//             heading: "",
//             image: "",
//             author: "",
//             category: ""
//         };
//     }

//     submitHandler = async (e) => {
//         //    e.preventDefault()
//         //      dispatch(addNews({ heading, author, description, category }))
//         const { data } = await axios.post('/api/news/addnews', { heading: 'test1', description: this.state.description, category: 'sports', author: 'saksham' })
//         console.log('data', data)
//     }

//     render() {
//         return (
//             <div>
//                 <CKEditor
//                     editor={ClassicEditor}
//                     data={this.state.description}
//                     // onReady={editor => {
//                     //     // You can store the "editor" and use when it is needed.
//                     //     console.log('Editor is ready to use!', editor);
//                     // }}
//                     onChange={(event, editor) => {
//                         const data = editor.getData();
//                         //console.log( { event, editor, data } );
//                         this.setState({
//                             description: data
//                         })
//                     }}
//                 // onBlur={(event, editor) => {
//                 //     console.log('Blur.', editor);
//                 // }}
//                 // onFocus={(event, editor) => {
//                 //     console.log('Focus.', editor);
//                 // }}
//                 />
//                 <div>
//                     <button type='button' onClick={this.submitHandler}>Submit</button>
//                 </div>
//             </div>

//         );
//     }
// }

// export default EditorContainer