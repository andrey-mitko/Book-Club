import React from "react";
import Book from "../Book";
import { Panel, P, Em, Close, CloseWrapper, BG } from "./styles";

const DetailPanel = ({ book, closePanel }) => {
  return (
    <>
      <BG onClick={closePanel} />
      <Panel>
        <CloseWrapper onClick={closePanel}>
          <Close />
        </CloseWrapper>

        <Book book={book} isLarge={true} />
        <P>{book.description}</P>
        <P>
          <Em>Published in {book.published}</Em>
        </P>
      </Panel>
    </>
  );
};

export default DetailPanel;
