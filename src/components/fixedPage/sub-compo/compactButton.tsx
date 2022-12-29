type items = {
    item: string
};

export default function CompactButton({ item }: items) {
    return (
        <div className="genre-button">
            {item}
        </div>
    );
}