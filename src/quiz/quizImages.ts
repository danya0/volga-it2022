// quiz 1
import men from '../img/quiz1/men.svg'
import women from '../img/quiz1/women.svg'
// quiz 2
import menEyeglasses from '../img/quiz2/men_eyeglasses.svg'
import menSunglasses from '../img/quiz2/men_sunglasses.svg'
import womenEyeglasses from '../img/quiz2/women_eyeglasses.svg'
import womenSunglasses from '../img/quiz2/women_sunglasses.svg'
// quiz 4
import frameSize from '../img/quiz4/frame_size.png'
// quiz 5
import darkShade from '../img/quiz5/dark_shade.svg'
import lightShade from '../img/quiz5/light_shade.svg'
import transitionShade from '../img/quiz5/transition_shade.svg'
// quiz6 6
import menBetween from '../img/quiz6/men_between.svg'
import menLong from '../img/quiz6/men_long.svg'
import menRound from '../img/quiz6/men_round.svg'
import womenBetween from '../img/quiz6/women_between.svg'
import womenLong from '../img/quiz6/women_long.svg'
import womenRound from '../img/quiz6/women_round.svg'
import nogenBetween from '../img/quiz6/nogen_between.svg'
import nogenLong from '../img/quiz6/nogen_long.svg'
import nogenRound from '../img/quiz6/nogen_round.svg'
// quiz 8
import rectangle from '../img/quiz8/Bitmap.png'
import aviator from '../img/quiz8/aviator.png'
import browline from '../img/quiz8/browline.png'
import cat_eye from '../img/quiz8/cat_eye.png'
import geometric from '../img/quiz8/geometric.png'
import oversized from '../img/quiz8/oversized.png'
import oval from '../img/quiz8/oval.png'
import rimless from '../img/quiz8/rimless.png'
import round from '../img/quiz8/round.png'
import square from '../img/quiz8/square.png'
import wayframe from '../img/quiz8/wayframe.png'
import wrap from '../img/quiz8/wrap.png'
// quiz 10
import ray_ban from '../img/quiz10/ray-ban.png'
import armani_exchange from '../img/quiz10/armani_exchange.png'
import burberry from '../img/quiz10/burberry.png'
import coach from '../img/quiz10/coach.png'
import gucci from '../img/quiz10/gucci.png'
import hilary_duff from '../img/quiz10/hilary_duff.png'
import michael_kors from '../img/quiz10/michael_kors.png'
import oakley from '../img/quiz10/oakley.png'
import prada from '../img/quiz10/prada.png'
import tory_burch from '../img/quiz10/tory_burch.png'
import versace from '../img/quiz10/versace.png'
import vogue from '../img/quiz10/vogue.png'
import {IQuizImage} from "../types/quizTypes";

export const quizImages: IQuizImage = {
  quiz1: {men, women},
  quiz2: {menEyeglasses, menSunglasses, womenEyeglasses, womenSunglasses},
  quiz4: {frameSize},
  quiz5: {darkShade, lightShade, transitionShade},
  quiz6: {menBetween, menLong, menRound, womenBetween, womenLong, womenRound, nogenBetween, nogenLong, nogenRound},
  quiz8: {rectangle, aviator, browline, cat_eye, geometric, oversized, oval, rimless, round, square, wayframe, wrap},
  quiz10: {ray_ban, armani_exchange, burberry, coach, gucci, hilary_duff, michael_kors, oakley, prada, tory_burch, versace, vogue}
}