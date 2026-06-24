import classes from './VatSection.module.scss'

export function Vat({ vat }: { vat: number}) {

    return (
        <div className={classes.checkoutSection}>
            <div>VAT</div>
            <div>${vat.toFixed(2)}</div>
        </div>
    )
}