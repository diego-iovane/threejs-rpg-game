export const bubbleMotions = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
    },
    exit: {
        scale: 0,
    }
}

export const draggablesMotions = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            staggerChildren: .2
        }
    },
    exit: {
        scale: 0,
    }
}

export const draggableMotion = {
    initial: {
        opacity: 0,
        y: -5,
    },
    animate: {
        opacity: 1,
        y: 0,
    }
}