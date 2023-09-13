class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer[]
 */
function twoSum($nums, $target) {
    for($i = 0; $i < count($nums); $i++) {
        for($j = 0; $J < count($nums); $j++) {
            if($i == $j) {
                break;
            }
            
            $sum = $nums[$i] + $nums[$j];
            
            if($sum == $target) {
                return $res = [$i, $j];
            }
            
        }
    }
    
            
    return $res;
    
}
}