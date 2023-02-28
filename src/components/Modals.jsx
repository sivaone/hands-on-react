export default ({ member, handleClose, handleNext, handlePrev }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{ width: '200px' }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </hgroup>
          </div>
        </hgroup>
        <footer>
          <a href="#prev" onClick={handlePrev} role="button">Prev</a>
          <a href="#next" onClick={handleNext} role="button">Next</a>
        </footer>
      </article>
    </dialog>
  )
}
