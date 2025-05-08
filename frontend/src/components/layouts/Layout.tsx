export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="max-w-6xl mx-auto p-4 border-b-4">
            {children}
        </div>
    )

}