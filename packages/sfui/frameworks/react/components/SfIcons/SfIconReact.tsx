import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconReact({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="react" {...attributes}>
      <>
        <path d="M13.96 11.952c0 1.099-.877 1.99-1.96 1.99s-1.96-.891-1.96-1.99.877-1.989 1.96-1.989 1.96.89 1.96 1.99" />
        <path
          fillRule="evenodd"
          d="M12 4.467a15 15 0 0 0-.958-.868c-.818-.674-1.63-1.17-2.388-1.418-.758-.25-1.516-.266-2.154.108S5.497 3.337 5.33 4.127c-.166.79-.149 1.752.018 2.807q.097.613.262 1.276-.649.186-1.22.407c-.985.382-1.814.847-2.405 1.389-.592.542-.985 1.199-.985 1.946 0 .748.393 1.405.985 1.947.591.542 1.42 1.007 2.404 1.388q.573.222 1.22.408-.165.661-.261 1.276c-.167 1.055-.184 2.016-.017 2.807s.53 1.464 1.169 1.838c.638.374 1.396.357 2.154.108s1.57-.744 2.388-1.418q.475-.392.958-.868.483.476.958.868c.817.674 1.63 1.17 2.388 1.418.758.249 1.516.266 2.154-.108s1.003-1.048 1.17-1.838c.166-.79.149-1.752-.018-2.807a15 15 0 0 0-.262-1.276q.649-.186 1.22-.408c.985-.38 1.814-.847 2.405-1.388.592-.542.985-1.199.985-1.947 0-.747-.393-1.404-.985-1.946-.591-.542-1.42-1.007-2.404-1.389a14 14 0 0 0-1.22-.407q.165-.663.261-1.276c.167-1.055.184-2.016.017-2.807S18.14 2.663 17.5 2.29c-.638-.374-1.396-.357-2.154-.108s-1.57.744-2.388 1.418q-.475.391-.958.868M8.36 3.104c-.607-.2-1.06-.164-1.382.025s-.579.569-.712 1.201-.13 1.464.026 2.45q.09.57.245 1.191a23 23 0 0 1 2.934-.463 23 23 0 0 1 1.862-2.346q-.453-.446-.895-.81c-.764-.63-1.472-1.05-2.078-1.248M12 5.86c-.428.472-.858.995-1.281 1.561a28 28 0 0 1 2.562 0A21 21 0 0 0 12 5.86m-3.228 2.7a21 21 0 0 0-1.974.345c.19.613.421 1.251.693 1.906a29 29 0 0 1 1.281-2.25M8 11.952a27.4 27.4 0 0 1 2-3.515 26.5 26.5 0 0 1 4.002 0 27 27 0 0 1 2 3.515 27.4 27.4 0 0 1-2 3.516 26.5 26.5 0 0 1-4.002 0 27 27 0 0 1-2-3.516m-1.058 0A23 23 0 0 1 5.87 9.144q-.607.174-1.138.38c-.92.356-1.632.769-2.105 1.202-.474.434-.67.849-.67 1.226 0 .378.196.793.67 1.226.473.434 1.185.846 2.105 1.203q.53.206 1.138.38a24 24 0 0 1 1.072-2.809M6.798 15c.19-.613.421-1.252.693-1.907a29 29 0 0 0 1.281 2.251A21 21 0 0 1 6.798 15m-.261.935q-.155.62-.245 1.19c-.156.987-.16 1.818-.026 2.45.133.633.39 1.013.712 1.202.323.188.775.224 1.382.025.606-.2 1.314-.618 2.079-1.248q.44-.364.894-.81a23 23 0 0 1-1.862-2.347 23 23 0 0 1-2.934-.462m6.13 2.809q.453.446.895.81c.764.63 1.472 1.049 2.078 1.248.607.199 1.06.163 1.382-.025.322-.19.579-.569.712-1.201s.13-1.464-.026-2.45q-.09-.57-.245-1.191a23 23 0 0 1-2.934.462 23 23 0 0 1-1.862 2.346m.614-2.26c-.423.567-.853 1.09-1.281 1.562a21 21 0 0 1-1.281-1.562 28 28 0 0 0 2.562 0m1.947-1.14A21 21 0 0 0 17.202 15a22 22 0 0 0-.693-1.907 29 29 0 0 1-1.281 2.251m1.83-3.39c.439.964.797 1.91 1.073 2.808q.607-.174 1.138-.38c.92-.357 1.632-.77 2.105-1.203s.67-.848.67-1.226c0-.377-.196-.792-.67-1.226-.473-.433-1.184-.846-2.105-1.202a13 13 0 0 0-1.138-.38 23 23 0 0 1-1.072 2.808m.405-3.982a23 23 0 0 0-2.934-.463 23 23 0 0 0-1.862-2.346q.453-.446.895-.81c.764-.63 1.472-1.049 2.078-1.248.607-.2 1.06-.164 1.382.025s.579.569.712 1.201.13 1.464-.026 2.45q-.09.57-.245 1.191m-.261.935a22 22 0 0 1-.693 1.906 29 29 0 0 0-1.281-2.25c.695.088 1.356.204 1.974.344"
          clipRule="evenodd"
        />
      </>
    </SfIconBase>
  );
}
