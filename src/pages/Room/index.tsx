/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/button-has-type */
import React, { RefObject, useRef, useCallback } from 'react';
import {
  ReactSketchCanvas,
  ReactSketchCanvasStates,
} from 'react-sketch-canvas';

import { Header, Game } from './styles';

import logoImg from '../../assets/logo.svg';
import backImg from '../../assets/back.svg';
import backgroundCanvas from '../../assets/background.svg';

import undoImg from '../../assets/undo.svg';
import redoImg from '../../assets/redo.svg';
import brushImg from '../../assets/brush.svg';
import eraserImg from '../../assets/eraser.svg';

const canvaStyles = {
  cursor: 'crosshair',
  postion: 'relative',
};

const Room: React.FC = () => {
  const canvasRef = useRef<ReactSketchCanvas>(null);

  const handleUndoCanvas = useCallback(() => {
    return canvasRef.current?.undo();
  }, []);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Doomophone" />
        <button className="Voltar">
          <img src={backImg} alt="Volte" />
          Voltar
        </button>
      </Header>
      <Game>
        <h2>Desenhe essa frase</h2>
        <h1>Lorem Ipsum</h1>
        <ReactSketchCanvas
          // eslint-disable-next-line no-return-assign
          style={canvaStyles}
          background={`no-repeat url(${backgroundCanvas})`}
          width="960px"
          height="540px"
          strokeColor="#EF233C"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onUpdate={() => {}}
          allowOnlyPointerType="all"
          ref={canvasRef}
        />
        <li>
          <ul>
            <button className="Undo" onClick={handleUndoCanvas}>
              <img src={undoImg} alt="undo" />
              undo
            </button>
          </ul>
          <ul>
            <button className="Redo">
              <img src={redoImg} alt="redo" />
              redo
            </button>
          </ul>
          <ul>
            <button className="Eraser">
              <img src={eraserImg} alt="eraser" />
              eraser
            </button>
          </ul>
          <ul>
            <button className="Size">
              <img src={brushImg} alt="size" />
              size
            </button>
          </ul>
          <ul>
            <button className="Color">
              <div className="color" />
              color
            </button>
          </ul>
        </li>
      </Game>
    </>
  );
};

export default Room;
