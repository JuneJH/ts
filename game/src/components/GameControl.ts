import { GameViewer } from './../types/types';
import { gameConfig } from './gameConfig';
import { GameRule } from './GameRule';
import { SquareGroup } from './SquareGroup';
import { Direction, GameStatus } from "../types/types";
import { createGroupShape } from './tetris';
import { Square } from './Square';

export class GameControl {
    private _existSq: Square[] = []
    private _gameStatus: GameStatus = GameStatus.gameWait
    private _timer: number | null = null
    private _fallTime: number = 1000
    private _currTetris: SquareGroup = createGroupShape();
    private _nextTetris: SquareGroup = createGroupShape();
    private _score: number = 0;
    constructor(private _viewer: GameViewer) {
        this.computePosition(this._nextTetris, gameConfig.nextPanel.width);
    }

    public set score(val: number) {
        this._score = val;
        this._viewer.showScore(this.score);
        const result = gameConfig.gameLevel.filter(ele => ele.score < this.score);
        const min = Math.min(...result.map(ele => ele.duraction))
        if (result.length > 0 && this._fallTime > min) {
            this._fallTime = min;
            clearInterval(this._timer);
            this._timer = null;
            this.autoDown();
        }
    }
    public get score() {
        return this._score;
    }
    public start() {
        if (this._gameStatus === GameStatus.gameWait) {
            this._existSq.forEach(ele => ele.shower.remove());
            this._existSq = [];
            this._gameStatus = GameStatus.gameing;
            this.swapSq();
            this.autoDown()
        } else if (this._gameStatus === GameStatus.gamepause) {
            this._gameStatus = GameStatus.gameing;
            this.autoDown()
        }
    }
    private init() {
        this._gameStatus = GameStatus.gameWait;
        this._fallTime = 1000;
        this._nextTetris = createGroupShape();
        clearInterval(this._timer);
        this._timer = null;
        this._score = 0;
    }
    public pause() {
        if (this._timer && this._gameStatus === GameStatus.gameing) {
            this._gameStatus = GameStatus.gamepause;
            clearInterval(this._timer);
            this._timer = null
        }
    }
    private autoDown() {
        if (!this._timer) {
            this._timer = setInterval(() => {
                if (!GameRule.move(Direction.down, this._currTetris, this._existSq)) {
                    this.drop2Bootom()
                }
            }, this._fallTime)
        }
    }
    public control_left() {
        if (this._gameStatus != GameStatus.gameing) return;
        GameRule.move(Direction.left, this._currTetris, this._existSq)
    }
    public control_down() {
        if (this._gameStatus != GameStatus.gameing) return;
        GameRule.move(Direction.down, this._currTetris, this._existSq)
        // this.drop2Bootom()
    }
    public control_right() {
        if (this._gameStatus != GameStatus.gameing) return;
        GameRule.move(Direction.right, this._currTetris, this._existSq)
    }
    public control_rotate() {
        if (this._gameStatus != GameStatus.gameing) return;
        this._currTetris.rotate(this._currTetris.rotateResult(), this._existSq)
    }
    private swapSq() {
        this._currTetris = this._nextTetris;
        this._nextTetris = createGroupShape();
        this.computePosition(this._currTetris, gameConfig.gamePanel.width);
        this.computePosition(this._nextTetris, gameConfig.nextPanel.width);
        if (GameRule.gameOver(this._existSq, this._currTetris)) {
            this._gameStatus = GameStatus.gameWait;
            this.init();
            return;
        }
        this._viewer.show(this._currTetris)
        this._viewer.showNext(this._nextTetris)
    }
    private computePosition(sq: SquareGroup, width: number) {
        sq.centerPoint = {
            x: Math.ceil(width / 2) - 1,
            y: 0
        }
        if (sq.squareGroup.some(it => it.postion.y < 0)) {
            sq.centerPoint = {
                x: sq.centerPoint.x,
                y: sq.centerPoint.y + 1,
            }
        }
    }
    // 触底
    drop2Bootom() {
        this._existSq.push(...this._currTetris.squareGroup);
        const score = GameRule.remove(this._existSq);
        this.score += this.computeScore(score)
        this._nextTetris.squareGroup.forEach(ele => ele.shower.remove());
        this.swapSq();
    }
    private computeScore(score: number): number {
        if (score <= 0) return 0;
        if (score >= 7) return 50;
        switch (score) {
            case 6: return 30;
            case 5: return 25;
            case 4: return 20;
            case 3: return 15;
            case 2: return 10;
            default: return 5
        }

    }
}