import React from 'react'
import CharacterItem from './CharacterItem'
import Spin from './Spin';

const characters = ({ items, isLoading }) => {
    return isLoading ? (<Spin />) : (<section className="cards">
        {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
        ))}
    </section>)
}

export default characters
