import { useFeatureStore } from "@/store/store"
import classNames from "classnames"
import Image from "next/image"
import { motion } from 'framer-motion'

const Visual = ({children, id}: {children: React.ReactNode, id: string}) => {
    const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature)

    return(
        <div className={classNames("z-10 pointer-events-none opacity-0 fixed inset-0 flex items-center justify-center",
        `visual-${id}`)}>
            <div className="max-w-6xl px-4">
                {children}
            </div>
        </div>
    )
}

export const MusicVisual = ({id}: {id: string}) => {
    const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature)

    return(
        <Visual id={id}>
            {fullScreenFeature && (
                <motion.div layoutId={"visual-img"}>
                    <Image width={1200} height={1000} src={"https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" />
                </motion.div>
            )}
        </Visual>
    )
}

export const OtherVisual = ({id}: {id:string}) => {
    return(
        <Visual id={id}>
            <Image width={700} height={700} src={"https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" />
        </Visual>
    )
}