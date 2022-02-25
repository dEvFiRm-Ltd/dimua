import React, { useEffect, useState } from 'react';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (props.initialContent) {
      const { contentBlocks, entityMap } = htmlToDraft(props.initialContent);
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      setEditorState({
        editorState: EditorState.createWithContent(contentState),
      });
    }
  }, [props.initialContent]);

  const onEditorStateChange = (editorState) => {
    setEditorState({
      editorState,
    });
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    props.onEditorContentChange && props.onEditorContentChange(body);
  };
  return (
    <React.Fragment>
      <Editor
        editorState={editorState}
        wrapperClassName='rich-editor-wrapper'
        editorClassName='rich-editor'
        onEditorStateChange={onEditorStateChange}
        toolbarClassName={props.hideToolbar ? 'hide-toolbar' : ''}
      />
    </React.Fragment>
  );
};

export default RichTextEditor;
