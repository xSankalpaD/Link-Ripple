import React from 'react'

const LinkTree = ({data}) => {
  const { name, avatar, bio, links } = data;
  return (
    <>
      <section>
        <img src={avatar} alt="" />
        <h2>{name ? name: "no Username"}</h2>
        <p>{bio}</p>
        <div>
          <AnimatePresence>
            {links.map((link, index) => {
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            })}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export default LinkTree