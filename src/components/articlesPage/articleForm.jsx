import React, { useState } from 'react';
import QuillEditor from './editor';
import ArticlePreview from './preview';

const ArticleForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [editorHtml, setEditorHtml] = useState('');
  const [category, setCategory] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, category, editorHtml });
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const isFormValid = title && editorHtml && category !== 'None';
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-4">Create New Article</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            {showPreview ? (
                <ArticlePreview title={title} content={editorHtml} category={category} />
            ) : (
                <>
                <div className="mb-4">
                    <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                    className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <QuillEditor
                    value={editorHtml}
                    onChange={handleEditorChange}
                    className="rounded border focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
                    >
                    <option value="None">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Design">Design</option>
                    <option value="Algorithms">Algorithms</option>
                    <option value="Security">Security</option>
                    </select>
                </div>
                </>
            )}
            <div className="flex justify-between">
                <button
                    onClick={togglePreview}
                    className={`${
                    showPreview ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white py-2 px-4 rounded-lg border border-blue-500`}
                    disabled={!isFormValid}
                >
                    {showPreview ? 'Back to Edit' : 'Preview'}
                </button>
                <button
                    type="submit"
                    className={`${
                    isFormValid ? 'bg-blue-600' : 'bg-blue-500'
                    } hover:bg-blue-600 text-white py-2 px-4 rounded-lg border border-blue-500`}
                    disabled={!isFormValid}
                >
                    Publish
                </button>
            </div>
        </form>
    </div>
  );
};

export default ArticleForm;