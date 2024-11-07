type UnitSelectorProps = {
    selectedUnit: 'UK' | 'US' | 'EU' | 'Foot Length (cm)';
    onUnitClick: (unit: 'UK' | 'US' | 'EU' | 'Foot Length (cm)') => void;
};

const UnitSelector = ({ selectedUnit, onUnitClick }: UnitSelectorProps) => {
    return (
        <div className="product__units">
            {['UK', 'US', 'EU', 'Foot Length (cm)'].map((unit) => (
                <span
                    key={unit}
                    className={`product__units-item ${selectedUnit === unit ? 'product__units-item--active' : ''}`}
                    onClick={() => onUnitClick(unit as 'UK' | 'US' | 'EU' | 'Foot Length (cm)')}
                >
                    {unit}
                </span>
            ))}
        </div>
    );
};

export default UnitSelector;
