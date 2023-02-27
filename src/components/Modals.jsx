export default ({ member, handleClose }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close" aria-label="Close"
          className="close"
          data-target="model-member"
          onClick={handleClose} />

        <hgroup>
          <div style={{
            display: "flex",
            gap: "1rem"
          }}>
            <img style={{ width: "200px" }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
            <hgroup>
              <h1>{member.anme}</h1>
              <h1>{member.bio}</h1>
            </hgroup>
          </div>
        </hgroup>

      </article>
    </dialog>
  )
}