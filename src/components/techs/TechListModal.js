import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/baseURL';
import TechItem from './TechItem';


const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);
    
    const getTechs = async () => {
        setLoading(true);
        
        const res = await fetch(`${BASE_URL}/techs`);
        const data = await res.json();
        
        setTechs(data)
        setLoading(false);
    };

    if (loading) {
        
    };

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (<TechItem key={tech.id} tech={tech} />))}
                </ul>
            </div>
        </div>
    );
};

export default TechListModal;
