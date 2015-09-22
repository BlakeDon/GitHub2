public class Solution {
     public int findMin(int[] nums) {
        if(nums==null) return Integer.MIN_VALUE;
        if(nums.length==1) return nums[0];
        int now=0,prev=nums.length-1;
        for(;now<nums.length;) {
        	if(nums[now]<nums[prev]) return nums[now];
        	prev=now++;
        }

        return -1;
    }
}