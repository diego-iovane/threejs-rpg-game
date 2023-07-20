
const Lights = () => {
    return (
        <>
            <directionalLight
                castShadow
                position={[4, 4, 1]}
                intensity={1.5}
            />
            <ambientLight intensity={0.5} />
        </>
    )
}

export default Lights