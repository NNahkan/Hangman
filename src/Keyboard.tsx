import s from "./Keyboard.module.css"

const KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
]

type KeyboardProps = {
	activeLetters: string[]
	inactiveLetters: string[]
	addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter }) {
	return (
		<div style={{
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit,minmax(75px, 1fr))",
			gap: ".5rem",
		}}>
			{KEYS.map(key => {
				const isActive = activeLetters.includes(key)
				const isInactive = inactiveLetters.includes(key)
				return <button
					onClick={() => addGuessedLetter(key)}
					className={`${s.btn} ${isActive && s.active} ${isInactive && s.inactive}`}
					disabled={isInactive || isActive}
					key={key}>
					{key}
				</button>
			}
			)}
		</div>
	)
}