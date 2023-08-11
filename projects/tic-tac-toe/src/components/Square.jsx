export const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    if (!updateBoard) return
    if (index === undefined) return

    updateBoard(index)
  }

  return (
    <div
      className={className}
      onClick={handleClick}>
      {children}
    </div>
  )
}
